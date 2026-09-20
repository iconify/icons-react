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
		"content": `<style>.s2gvl-bzv {
  fill: currentColor;
  d: path("M3.308 14.692V9.308h4.384v3.323H6.64l.9 2.061h-.923l-.9-2H4.192v2zm5.577 0l1.73-5.384h1.347l1.73 5.384h-.923l-.503-1.538h-1.943l-.515 1.538zm6.788 0L14.25 9.308h.904l.942 3.519l.904-3.52h.808l.903 3.52l.943-3.52h.904l-1.424 5.385h-.826l-.904-3.415l-.904 3.415zm-5.115-2.384h1.461l-.596-1.808h-.27zm-6.366-.5h2.616v-1.616H4.192z");
}
</style><path class="s2gvl-bzv"/>`,
		"fallback": "material-symbols-light:raw-on-outline-sharp",
	});
}

export default Component;
