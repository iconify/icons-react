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
		"content": `<style>.lv3w3lbdo {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v5.56a6.5 6.5 0 0 0-1.5-1.078V7.25a1.75 1.75 0 0 0-1.75-1.75H10v13h1.076c.081.523.224 1.026.422 1.5H5.25A3.25 3.25 0 0 1 2 16.75zM4.75 8.5c0 .414.336.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75m0 3.5c0 .414.336.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75m.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646l-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z");
}
</style><path class="lv3w3lbdo"/>`,
		"fallback": "fluent:panel-left-text-dismiss-24-filled",
	});
}

export default Component;
