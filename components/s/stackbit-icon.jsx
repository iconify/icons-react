import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t39pkzapx {
  fill: var(--svg-color--ff364e, #ff364e);
  d: path("m177.246 78.768l61.363 30.971a31.48 31.48 0 0 1 17.29 25.637l.101 2.494v70.9a47.263 47.263 0 0 1-44.57 47.184l-2.676.077H.158l78.682-78.783h98.406zM255.856 0l-78.608 78.769H78.84v98.479l-61.52-30.885A31.51 31.51 0 0 1 .099 120.71L0 118.218V47.334A47.263 47.263 0 0 1 44.162.102l3.1-.102z");
}
</style><path class="t39pkzapx"/>`,
		"fallback": "logos:stackbit-icon",
	});
}

export default Component;
