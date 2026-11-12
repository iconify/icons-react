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
		"content": `<style>.n9y477w0i {
  cx: 11px;
  cy: 11px;
  r: 9px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ov-0mlbnw {
  fill: currentColor;
  d: path("M20.2832 18.2572C20.5014 18.2752 20.7702 18.3602 21.0586 18.4467C21.3222 18.5256 21.5732 18.5959 21.7578 18.6947C22.7333 19.2173 23.0484 20.4663 22.4375 21.389C22.3218 21.5638 22.1343 21.745 21.9395 21.9398C21.7446 22.1346 21.5634 22.3221 21.3887 22.4379C20.4659 23.0488 19.217 22.7336 18.6943 21.7582C18.5955 21.5736 18.5253 21.3226 18.4463 21.059C18.3599 20.7706 18.2749 20.5017 18.2568 20.2836C18.1617 19.127 19.1267 18.1621 20.2832 18.2572Z");
}
</style><circle class="n9y477w0i"/><path class="ov-0mlbnw"/>`,
		"fallback": "solar:rounded-magnifier-bold-duotone",
	});
}

export default Component;
