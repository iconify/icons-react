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
		"content": `<style>.rv01vxogt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.958 9.839q1.361.263 2.401 1.302q1.391 1.391 1.391 3.359t-1.391 3.359T7 19.25t-3.359-1.391T2.25 14.5t1.391-3.359Q4.822 9.96 6.418 9.782l1.358-4.979q.017-.059.042-.115t.06-.107q.034-.051.076-.095t.091-.082q.048-.037.103-.066t.112-.048t.118-.03q.061-.01.122-.01h7q.061 0 .122.01q.06.01.118.03t.112.048q.055.029.103.066q.049.037.091.082q.042.044.076.095t.06.107q.025.056.042.115l1.358 4.979q1.596.178 2.777 1.359q1.391 1.391 1.391 3.359t-1.391 3.359T17 19.25t-3.359-1.391T12.25 14.5t1.391-3.359q1.04-1.039 2.401-1.302L14.927 5.75H9.073z");
}
</style><path class="rv01vxogt"/>`,
		"fallback": "uix-solid:sightseeing-binoculars",
	});
}

export default Component;
