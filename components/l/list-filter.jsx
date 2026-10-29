import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-qb6k6s.css';
import '../../css/l/lz4sajp4x.css';
import '../../css/o/osghi4b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-qb6k6s"/><path class="lz4sajp4x"/><path class="osghi4b5a"/>`,
		"fallback": "withicons-bauhaus:list-filter",
	});
}

export default Component;
