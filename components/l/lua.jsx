import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpj0hqbya.css';
import '../../css/s/s81sm_b6x.css';
import '../../css/s/sbpqudbjx.css';
import '../../css/v/vlmn7tbqo.css';
import '../../css/n/ntbk6mbsv.css';

const viewBox = {"width":947,"height":947};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpj0hqbya"/><path class="s81sm_b6x"/><path class="sbpqudbjx"/><path class="vlmn7tbqo"/><path class="ntbk6mbsv"/>`,
		"fallback": "thesvg-color:lua",
	});
}

export default Component;
