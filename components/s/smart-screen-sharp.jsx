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
		"content": `<style>.eh700nn6o {
  fill: currentColor;
  d: path("M1 19V5h22v14zm5-2h12V7H6zm7.25-4.25q-.325 0-.537-.213T12.5 12t.213-.537t.537-.213t.538.213T14 12t-.213.538t-.537.212m-5 0q-.325 0-.537-.213T7.5 12t.213-.537t.537-.213t.538.213T9 12t-.213.538t-.537.212m7.5 0q-.325 0-.537-.213T15 12t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212m-5 0q-.325 0-.537-.213T10 12t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212");
}
</style><path class="eh700nn6o"/>`,
		"fallback": "material-symbols:smart-screen-sharp",
	});
}

export default Component;
