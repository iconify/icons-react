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
		"content": `<style>.i41nic5xh {
  fill: currentColor;
  d: path("M6.154 21.5v-7h-1.5V9q0-.633.434-1.066Q5.52 7.5 6.154 7.5h2.692q.633 0 1.067.434q.433.433.433 1.066v5.5h-1.5v7zm.145-15.53q-.491-.491-.491-1.2q0-.71.491-1.202q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201T8.701 5.97T7.5 6.461t-1.201-.49M15.5 21.5V16h-2.423l2.011-7.496q.143-.477.527-.74q.383-.264.885-.264t.886.264t.526.74L19.923 16H17.5v5.5zm-.201-15.53q-.491-.491-.491-1.2q0-.71.491-1.202q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201t-.491 1.201t-1.201.491t-1.201-.49");
}
</style><path class="i41nic5xh"/>`,
		"fallback": "material-symbols-light:wc-outline",
	});
}

export default Component;
