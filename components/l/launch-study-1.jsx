import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4wx7em1k.css';
import '../../css/a/a5g7susyd.css';
import '../../css/t/tsv069uoe.css';
import '../../css/w/weo7tpp0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p4wx7em1k"/><path class="a5g7susyd"/><path class="tsv069uoe"/><path class="weo7tpp0d"/>`,
		"fallback": "carbon:launch-study-1",
	});
}

export default Component;
