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
		"content": `<style>.gcb29ilgr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 6q0-3.25 3.25-3.25h11q3.25 0 3.25 3.25v8q0 3.25-3.25 3.25h-6.218l-3.788 3.314q-.112.099-.254.146q-.141.048-.29.038t-.282-.076q-.134-.066-.232-.178q-.09-.103-.138-.23q-.048-.128-.048-.264v-2.755q-3-.123-3-3.245zm13.195 2.056q0-1.036-.733-1.768q-.732-.733-1.768-.733q-1.035 0-1.767.733l-3.889 3.889q-.733.732-.733 1.767q0 1.036.733 1.768q.732.733 1.768.733q1.035 0 1.767-.733l3.889-3.889q.733-.732.733-1.767");
}
</style><path class="gcb29ilgr"/>`,
		"fallback": "uix-solid:pharmacist-consult",
	});
}

export default Component;
