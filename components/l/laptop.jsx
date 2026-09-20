import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5awmwr5a.css';
import '../../css/n/ndq30w6of.css';
import '../../css/s/spoulug9m.css';
import '../../css/i/itm218-id.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5awmwr5a"/><path class="ndq30w6of"/><path class="spoulug9m"/><path class="itm218-id"/>`,
		"fallback": "openmoji:laptop",
	});
}

export default Component;
