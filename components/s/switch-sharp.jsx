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
		"content": `<style>.oxzne37et {
  fill: currentColor;
  d: path("M4 22V2h16v20zm4-5h8V7H8zm2-2v-4h4v4zm2-9.75q.3 0 .525-.213t.225-.537q0-.3-.225-.525T12 3.75q-.325 0-.537.225t-.213.525q0 .325.213.538T12 5.25m0 15q.3 0 .525-.213t.225-.537q0-.3-.225-.525T12 18.75q-.325 0-.537.225t-.213.525q0 .325.213.538t.537.212");
}
</style><path class="oxzne37et"/>`,
		"fallback": "material-symbols:switch-sharp",
	});
}

export default Component;
