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
		"content": `<style>.b_ioeccqm {
  fill: currentColor;
  d: path("M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M164 48h-24V36h24Zm-48-12v12H92V36Zm80 164a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Zm-28-38a30 30 0 0 1-28 29.93V196a12 12 0 0 1-24 0v-4h-8a12 12 0 0 1 0-24h30a6 6 0 0 0 0-12h-20a30 30 0 0 1-2-59.93V96a12 12 0 0 1 24 0h8a12 12 0 0 1 0 24h-30a6 6 0 0 0 0 12h20a30 30 0 0 1 30 30");
}
</style><path class="b_ioeccqm"/>`,
		"fallback": "ph:tip-jar-bold",
	});
}

export default Component;
