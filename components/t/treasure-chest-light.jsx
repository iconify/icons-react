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
		"content": `<style>.afeo-rz6e {
  fill: currentColor;
  d: path("M184 42H72a54.06 54.06 0 0 0-54 54v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V96a54.06 54.06 0 0 0-54-54m42 54v10h-36V54.44A42.05 42.05 0 0 1 226 96m-88 42h-20v-36h20Zm-26 12h32a6 6 0 0 0 6-6v-26h28v76H78v-76h28v26a6 6 0 0 0 6 6m38-44V96a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v10H78V54h100v52ZM66 54.44V106H30V96a42.05 42.05 0 0 1 36-41.56M30 192v-74h36v76H32a2 2 0 0 1-2-2m194 2h-34v-76h36v74a2 2 0 0 1-2 2");
}
</style><path class="afeo-rz6e"/>`,
		"fallback": "ph:treasure-chest-light",
	});
}

export default Component;
