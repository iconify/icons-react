import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cq8evtx7x {
  fill: currentColor;
  d: path("M218 128a30 30 0 1 0-36-48V56a30 30 0 0 0-54-18a30 30 0 1 0-48 36H56a30 30 0 0 0-18 54a30 30 0 1 0 36 48v24a30 30 0 0 0 54 18a30 30 0 1 0 48-36h24a30 30 0 0 0 18-54m-18-42a18 18 0 0 1 0 36h-18v-18a18 18 0 0 1 18-18m-48-48a18 18 0 0 1 18 18v48a18 18 0 0 1-18 18h-18V56a18 18 0 0 1 18-18M86 56a18 18 0 0 1 36 0v18h-18a18 18 0 0 1-18-18m-48 48a18 18 0 0 1 18-18h48a18 18 0 0 1 18 18v18H56a18 18 0 0 1-18-18m18 66a18 18 0 0 1 0-36h18v18a18 18 0 0 1-18 18m48 48a18 18 0 0 1-18-18v-48a18 18 0 0 1 18-18h18v66a18 18 0 0 1-18 18m66-18a18 18 0 0 1-36 0v-18h18a18 18 0 0 1 18 18m30-30h-48a18 18 0 0 1-18-18v-18h66a18 18 0 0 1 0 36");
}
</style><path class="cq8evtx7x"/>`,
		"fallback": "ph:slack-logo-light",
	});
}

export default Component;
