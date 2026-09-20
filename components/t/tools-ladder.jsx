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
		"content": `<style>.slnptbc1i {
  fill: currentColor;
  d: path("M5.95 21q-.475 0-.75-.387t-.15-.838L9.5 3.7q.1-.325.35-.512T10.425 3q.5 0 .775.388t.15.837L10.85 6h5.625l.625-2.3q.1-.325.363-.512T18.05 3q.475 0 .75.388t.15.837L14.5 20.3q-.1.325-.35.513t-.575.187q-.5 0-.775-.387t-.15-.838l.5-1.775H7.525L6.9 20.3q-.1.325-.363.513T5.95 21m3.525-10h5.6l.825-3h-5.6zM8.1 16h5.6l.825-3h-5.6z");
}
</style><path class="slnptbc1i"/>`,
		"fallback": "material-symbols:tools-ladder",
	});
}

export default Component;
