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
		"content": `<style>.x477aubct {
  fill: currentColor;
  d: path("M4.077 19q-.46 0-.768-.309Q3 18.383 3 17.923V6.077q0-.46.309-.768Q3.617 5 4.077 5h3.171q.44 0 .759.318t.318.759v11.846q0 .44-.318.759T7.248 19zm6.33 0q-.44 0-.758-.318t-.318-.759V6.077q0-.44.318-.759T10.408 5h3.19q.44 0 .759.318t.318.759v11.846q0 .44-.318.759t-.759.318zm6.345 0q-.44 0-.759-.318t-.318-.759V6.077q0-.44.318-.759T16.752 5h3.171q.46 0 .768.309q.309.308.309.768v11.846q0 .46-.309.768q-.308.309-.768.309z");
}
</style><path class="x477aubct"/>`,
		"fallback": "material-symbols-light:view-week-rounded",
	});
}

export default Component;
