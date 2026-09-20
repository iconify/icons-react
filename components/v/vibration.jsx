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
		"content": `<style>.zb4x2tbgz {
  fill: currentColor;
  d: path("M8.423 20q-.666 0-1.14-.475t-.475-1.14V5.615q0-.666.474-1.14T8.423 4h7.154q.666 0 1.14.475t.475 1.14v12.77q0 .666-.474 1.14T15.577 20zm4.165-11.914q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M1.462 14.5v-5h1v5zm2.769 2v-9h1v9zm17.307-2v-5h1v5zm-2.769 2v-9h1v9z");
}
</style><path class="zb4x2tbgz"/>`,
		"fallback": "material-symbols-light:vibration",
	});
}

export default Component;
