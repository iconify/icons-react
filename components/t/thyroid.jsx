import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uje81e98x.css';
import '../../css/g/ggdh23b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uje81e98x"/><path class="ggdh23b4q"/></g>`,
		"fallback": "healthicons:thyroid",
	});
}

export default Component;
