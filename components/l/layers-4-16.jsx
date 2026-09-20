import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29lsnbme.css';
import '../../css/p/p4a6qjokb.css';
import '../../css/g/g7l77ybvb.css';
import '../../css/h/hdn7b_0el.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j29lsnbme"/><path clip-rule="evenodd" class="p4a6qjokb"/><path clip-rule="evenodd" class="g7l77ybvb"/><path class="hdn7b_0el"/>`,
		"fallback": "qlementine-icons:layers-4-16",
	});
}

export default Component;
