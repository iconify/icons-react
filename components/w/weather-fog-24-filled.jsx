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
		"content": `<style>.pwt81obxd {
  fill: currentColor;
  d: path("M7.745 19.5h8.501a.75.75 0 0 1 .102 1.493l-.102.007H7.745a.75.75 0 0 1-.102-1.493zh8.501zM4.75 16.52h14.5a.75.75 0 0 1 .102 1.492l-.102.007H4.75a.75.75 0 0 1-.102-1.493zM12 3.004c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 11.318A3.687 3.687 0 0 1 17.307 15H6.693A3.687 3.687 0 0 1 3 11.318a3.687 3.687 0 0 1 3.693-3.683h.08c.262-2.55 2.058-4.63 5.227-4.63");
}
</style><path class="pwt81obxd"/>`,
		"fallback": "fluent:weather-fog-24-filled",
	});
}

export default Component;
