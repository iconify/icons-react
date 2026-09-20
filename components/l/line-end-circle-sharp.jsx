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
		"content": `<style>.vo9i7p7si {
  fill: currentColor;
  d: path("M16 16.423q-1.73 0-2.97-1.127T11.614 12.5H3.076v-1h8.537q.176-1.67 1.416-2.796Q14.27 7.577 16 7.577q1.846 0 3.135 1.288T20.423 12t-1.288 3.134T16 16.423");
}
</style><path class="vo9i7p7si"/>`,
		"fallback": "material-symbols-light:line-end-circle-sharp",
	});
}

export default Component;
