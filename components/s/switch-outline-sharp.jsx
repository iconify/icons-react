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
		"content": `<style>.ol-woebdw {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4H6zm2-3h8V7H8zm2-2v-4h4v4zm2-8.75q.3 0 .525-.213t.225-.537q0-.3-.225-.525T12 4.75q-.325 0-.537.225t-.213.525q0 .325.213.538T12 6.25m0 13q.3 0 .525-.213t.225-.537q0-.3-.225-.525T12 17.75q-.325 0-.537.225t-.213.525q0 .325.213.538t.537.212M12 12");
}
</style><path class="ol-woebdw"/>`,
		"fallback": "material-symbols:switch-outline-sharp",
	});
}

export default Component;
