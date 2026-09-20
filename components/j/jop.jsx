import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gul6c2bst.css';
import '../../css/l/lo5b6ob4a.css';
import '../../css/k/kmhzx59nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGnS3rkbHK" class="gul6c2bst"/></defs><path class="lo5b6ob4a"/><use href="#SVGnS3rkbHK"/><path class="kmhzx59nw"/><use href="#SVGnS3rkbHK"/>`,
		"fallback": "token:jop",
	});
}

export default Component;
