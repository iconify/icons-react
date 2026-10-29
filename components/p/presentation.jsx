import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksor9la2b.css';
import '../../css/k/k77tf5bom.css';
import '../../css/s/svi179bkq.css';
import '../../css/p/pbw7u6bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksor9la2b wm-a"/><path class="k77tf5bom wm-k"/><path class="svi179bkq wm-a"/><path class="pbw7u6bac wm-a"/>`,
		"fallback": "withicons-bauhaus:presentation",
	});
}

export default Component;
