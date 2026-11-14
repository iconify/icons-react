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
		"content": `<style>.wxmov8b3a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m10.366 5.146l.001-.001q.91-1.115 2.233-.547q1.324.567 1.144 1.995l-.254 2.033q-.056.448.243.786q.298.338.749.338H16q1.524 0 2.176 1.377t-.312 2.557l-4.23 5.17q-.911 1.116-2.234.548q-1.324-.567-1.144-1.995l.254-2.033q.056-.448-.243-.786q-.298-.338-.749-.338H8q-1.524 0-2.176-1.377t.312-2.557z");
}
</style><path class="wxmov8b3a"/>`,
		"fallback": "uix-solid:lightning-bolt",
	});
}

export default Component;
