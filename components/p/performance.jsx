import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eocg56z0b.css';
import '../../css/p/pwae5gbzg.css';
import '../../css/g/goapajb2k.css';
import '../../css/w/wv-togb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="eocg56z0b"/><path class="pwae5gbzg"/><path class="goapajb2k"/><path class="wv-togb4q"/></g>`,
		"fallback": "icon-park:performance",
	});
}

export default Component;
