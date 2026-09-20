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
		"content": `<style>.bkh455zxo {
  fill: currentColor;
  d: path("m19 16.425l-1-1V4h-7.15L8.696 6.154l-.719-.708L10.423 3H19zm1.423 5.683L6.577 8.262L6 8.839V20h12v-1.736l1 1V21H5V8.423l.87-.87l-3.824-3.822l.714-.708l18.37 18.371zm-8.138-8.171");
}
</style><path class="bkh455zxo"/>`,
		"fallback": "material-symbols-light:no-sim-outline-sharp",
	});
}

export default Component;
