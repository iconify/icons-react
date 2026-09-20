import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s88or-mff {
  fill: currentColor;
  d: path("m9.179 10.5l-.998.874a.5.5 0 1 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.658.752l.998.874H5.5a.5.5 0 0 0 0 1zM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm1-2a1 1 0 0 1-1 1h-3V5h3a1 1 0 0 1 1 1zm-5-9v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z");
}
</style><path class="s88or-mff"/>`,
		"fallback": "fluent:panel-right-contract-20-regular",
	});
}

export default Component;
