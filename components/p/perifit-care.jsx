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
		"content": `<style>.ojsv7kqtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.23 15.778s-.422 5.692-3.373 9.908c-2.952 4.217-8.327 5.06-8.327 5.06m-2.635-16.865s-2.425 1.37-3.69 4.849m3.69 15.389c0-4.638 1.16-13.176-6.325-16.443c-7.483-3.268-13.07-2.108-13.07-2.108s.738 7.905 6.008 11.805s13.176 3.373 13.176 3.373");
}

.s_ioeflid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.105 13.881s2.425 1.37 3.69 4.849m-3.69 15.389c0-4.638-1.16-13.176 6.325-16.443c7.589-3.268 13.07-2.108 13.07-2.108s-.738 7.905-6.008 11.805s-13.176 3.373-13.176 3.373");
}

.s6lnpjbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.77 15.778s.422 5.692 3.373 9.908c2.952 4.217 8.327 5.06 8.327 5.06");
}
</style><path class="s_ioeflid"/><path class="ojsv7kqtb"/><path class="s6lnpjbee"/>`,
		"fallback": "arcticons:perifit-care",
	});
}

export default Component;
