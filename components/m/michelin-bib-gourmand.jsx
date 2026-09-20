import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ye90_879w.css';
import '../../css/y/yqqt7zbbu.css';
import '../../css/s/sqeg1cc7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ye90_879w"/><path class="yqqt7zbbu"/><path class="sqeg1cc7q"/></g>`,
		"fallback": "tabler:michelin-bib-gourmand",
	});
}

export default Component;
