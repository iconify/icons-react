import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/s/s41nwo9jh.css';
import '../../css/k/k8ef9sbjl.css';
import '../../css/b/blczsbbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="s41nwo9jh"/><path class="k8ef9sbjl"/><path class="blczsbbja"/>`,
		"fallback": "solar:shuffle-bold-duotone",
	});
}

export default Component;
