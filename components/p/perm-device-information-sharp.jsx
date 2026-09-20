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
		"content": `<style>.c0nltgb9x {
  fill: currentColor;
  d: path("M11.5 15.962v-5h1v5zm.5-6.808q-.261 0-.438-.177t-.177-.438t.177-.439t.438-.177t.439.177t.176.439t-.177.438t-.438.177M6 22V2h12v20zm1-3.5h10v-13H7z");
}
</style><path class="c0nltgb9x"/>`,
		"fallback": "material-symbols-light:perm-device-information-sharp",
	});
}

export default Component;
