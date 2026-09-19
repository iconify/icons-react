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
		"content": `<style>.awuipgffp {
  cx: 13.5px;
  cy: 15.5px;
  r: 2.5px;
  fill: currentColor;
}

.fntodxa3b {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h10v2H4v10H2z");
}

.jbx312dhc {
  fill: currentColor;
  d: path("M9 9h6v2H9z");
}

.pzyaeegyg {
  fill: currentColor;
  d: path("M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9zm2 13H8V8h8.17L19 10.83z");
}
</style><path class="pzyaeegyg"/><path class="jbx312dhc"/><circle class="awuipgffp"/><path class="fntodxa3b"/>`,
		"fallback": "ic:outline-save-all",
	});
}

export default Component;
