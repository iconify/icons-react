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
		"content": `<style>.dcrjmib8f {
  fill: currentColor;
  d: path("M2.23 13.25v-1h3v1zm4.62-4.942L4.712 6.175l.713-.708L7.539 7.6zm-1.44 9.644q-.237-.241-.237-.59q0-.348.24-.586t.59-.237t.587.24t.237.59q0 .348-.24.586t-.59.237t-.586-.24M8 13.25v-.5q0-1.671 1.165-2.835Q10.329 8.75 12 8.75t2.836 1.165T16 12.75v.5h-1v-.5q0-1.25-.875-2.125T12 9.75t-2.125.875T9 12.75v.5zm.41 8.702q-.237-.241-.237-.59q0-.348.24-.586t.59-.237t.586.24t.238.59q0 .348-.24.586t-.59.237t-.586-.24m3-4q-.238-.241-.238-.59q0-.348.24-.586t.59-.237t.586.24t.238.59q0 .348-.24.586t-.59.237t-.586-.24M11.5 5.98v-3h1v3zm2.91 15.97q-.237-.24-.237-.589q0-.348.24-.586t.59-.237t.586.24t.238.59q0 .348-.24.586t-.59.237t-.586-.24M17.15 8.308l-.713-.708l2.138-2.133l.689.708zm.26 9.644q-.237-.241-.237-.59q0-.348.24-.586t.59-.237t.587.24t.237.59q0 .348-.24.586t-.59.237t-.586-.24m1.358-4.702v-1h3v1zm-6.769 0");
}
</style><path class="dcrjmib8f"/>`,
		"fallback": "material-symbols-light:sunny-snowing-outline",
	});
}

export default Component;
