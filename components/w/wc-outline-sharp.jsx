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
		"content": `<style>.sbfn15buz {
  fill: currentColor;
  d: path("M6.154 21.5v-7h-1.5v-7h5.692v7h-1.5v7zm.145-15.53q-.491-.491-.491-1.2q0-.71.491-1.202q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201T8.701 5.97T7.5 6.461t-1.201-.49M15.5 21.5V16h-2.423l2.296-8.5h2.254l2.296 8.5H17.5v5.5zm-.201-15.53q-.491-.491-.491-1.2q0-.71.491-1.202q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201t-.491 1.201t-1.201.491t-1.201-.49");
}
</style><path class="sbfn15buz"/>`,
		"fallback": "material-symbols-light:wc-outline-sharp",
	});
}

export default Component;
