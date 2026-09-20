import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wx_qbnb7y {
  fill: currentColor;
  d: path("M1.462 14.5v-5h1v5zm2.769 2v-9h1v9zm17.307-2v-5h1v5zm-2.769 2v-9h1v9zM6.808 20V4h10.384v16zm9.384-1V5H7.808v14zM12.588 8.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M7.808 5v14z");
}
</style><path class="wx_qbnb7y"/>`,
		"fallback": "material-symbols-light:mobile-vibrate-outline-sharp",
	});
}

export default Component;
