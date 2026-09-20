import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bsz9_34ex {
  fill: currentColor;
  d: path("M13.154 4.683c1.236-2.242 4.458-2.241 5.693 0l10.742 19.5C30.783 26.347 29.216 29 26.743 29H5.25c-2.474 0-4.04-2.653-2.846-4.819zm3.941.966a1.25 1.25 0 0 0-2.19 0L4.157 25.146A1.25 1.25 0 0 0 5.251 27h21.492a1.25 1.25 0 0 0 1.095-1.853z");
}
</style><path class="bsz9_34ex"/>`,
		"fallback": "fluent:triangle-32-regular",
	});
}

export default Component;
