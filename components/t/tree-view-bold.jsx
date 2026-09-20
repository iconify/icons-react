import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h45ue2btj {
  fill: currentColor;
  d: path("M176 156h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H92V84h4a20 20 0 0 0 20-20V32a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v108a28 28 0 0 0 28 28h60v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H96a4 4 0 0 1-4-4v-60h64v4a20 20 0 0 0 20 20M68 36h24v24H68Zm112 160h24v24h-24Zm0-88h24v24h-24Z");
}
</style><path class="h45ue2btj"/>`,
		"fallback": "ph:tree-view-bold",
	});
}

export default Component;
