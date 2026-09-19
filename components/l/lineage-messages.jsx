import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ap9sudbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 31.666c3.324 0 6.284-1.629 7.5-5.798a16.55 16.55 0 0 1-7.5 1.368a16.54 16.54 0 0 1-7.5-1.368c1.216 4.17 4.176 5.798 7.5 5.798");
}

.bbo0kt1rz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.316c9.273 0 11.944 8.926 11.944 14.203S32.057 35.64 24 35.64s-11.944-3.844-11.944-9.121S14.726 12.316 24 12.316");
}

.ev93t9pzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.201 12.593l1.15-5.865a2.115 2.115 0 0 0-2.73-2.418l-4.99 1.625a21.578 21.578 0 1 0 6.57 6.658");
}
</style><path class="ev93t9pzy"/><path class="bbo0kt1rz"/><path class="ap9sudbha"/>`,
		"fallback": "arcticons:lineage-messages",
	});
}

export default Component;
