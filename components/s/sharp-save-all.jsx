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
		"content": `<style>.hb1_szbpz {
  fill: currentColor;
  d: path("M2 2h12v2H4v10H2z");
}

.qpe_27g9q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 6h11l4 4v11H6zm2 2h7v3H8zm5.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path clip-rule="evenodd" class="qpe_27g9q"/><path class="hb1_szbpz"/>`,
		"fallback": "ic:sharp-save-all",
	});
}

export default Component;
