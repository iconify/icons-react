import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wuz3vjbuu {
  fill: currentColor;
  d: path("M3 3.75A.75.75 0 0 1 3.75 3h20.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75m7.442 6.163c.161.181.352.32.558.419V17h6v-6.668a1.75 1.75 0 0 0 .832-.832H24a1 1 0 0 1 1 1v10.75A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V10.5a1 1 0 0 1 1-1h6.168q.105.22.274.413M9.5 11h-5v6h5zm0 7.5h-5v2.75a2.25 2.25 0 0 0 2.25 2.25H9.5zm1.5 5h6v-5h-6zm10.25 0a2.25 2.25 0 0 0 2.25-2.25V18.5h-5v5zM23.5 17v-6h-5v6zm-7.748-7.69l-1.002-.89V12a.75.75 0 0 1-1.5 0V8.42l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1-.996 1.12");
}
</style><path class="wuz3vjbuu"/>`,
		"fallback": "fluent:table-move-above-28-regular",
	});
}

export default Component;
