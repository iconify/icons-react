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
		"content": `<style>.rvlc75kew {
  fill: currentColor;
  d: path("M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M60 120h136v48H60Zm104-72h-24V36h24Zm-48-12v12H92V36ZM80 72h96a20 20 0 0 1 20 20v4H60v-4a20 20 0 0 1 20-20m96 148H80a20 20 0 0 1-20-20v-8h136v8a20 20 0 0 1-20 20");
}
</style><path class="rvlc75kew"/>`,
		"fallback": "ph:jar-label-bold",
	});
}

export default Component;
