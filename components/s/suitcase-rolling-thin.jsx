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
		"content": `<style>.sdrm72bpb {
  fill: currentColor;
  d: path("M100 88v96a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m28-4a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m32 0a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m44-20v144a12 12 0 0 1-12 12h-20v20a4 4 0 0 1-8 0v-20H92v20a4 4 0 0 1-8 0v-20H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h28V24a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v28h28a12 12 0 0 1 12 12M100 52h56V24a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12Zm96 12a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Z");
}
</style><path class="sdrm72bpb"/>`,
		"fallback": "ph:suitcase-rolling-thin",
	});
}

export default Component;
