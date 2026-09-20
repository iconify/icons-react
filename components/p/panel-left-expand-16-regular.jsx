import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gnpikw8xj {
  d: path("m9.647 9.147l.646-.647H8.502a.5.5 0 0 1 0-1h1.791l-.646-.646a.5.5 0 1 1 .707-.707l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 1 1-.707-.707");
}

.h732d-kpj {
  d: path("M2 4.999a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.002a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6.002a1 1 0 0 0 1 1h2.002V4zm3.002 0v8.002H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z");
}
</style><g class="cuyn6tgcc"><path class="gnpikw8xj"/><path class="h732d-kpj"/></g>`,
		"fallback": "fluent:panel-left-expand-16-regular",
	});
}

export default Component;
