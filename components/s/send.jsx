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
		"content": `<style>.kv0qdacok {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.53 6.409L8.97 13.97q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l7.561-7.56q.549.946.089 2.099l-3.238 8.095q-.541 1.357-2.001 1.417t-2.112-1.246L9.09 15.357q-.149-.298-.447-.447l-2.478-1.239q-1.307-.652-1.246-2.112t1.417-2.001l8.095-3.237q1.153-.461 2.099.088");
}
</style><path class="kv0qdacok"/>`,
		"fallback": "uix-solid:send",
	});
}

export default Component;
