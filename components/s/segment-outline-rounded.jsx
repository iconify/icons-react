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
		"content": `<style>.vr00cokcm {
  fill: currentColor;
  d: path("M10.5 17.27q-.213 0-.356-.145T10 16.768t.144-.356t.356-.143h9q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T10 11.999t.144-.356t.356-.143h9q.213 0 .356.144t.144.357t-.144.356t-.356.143zm-6-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="vr00cokcm"/>`,
		"fallback": "material-symbols-light:segment-outline-rounded",
	});
}

export default Component;
