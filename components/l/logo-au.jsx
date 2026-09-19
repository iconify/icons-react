import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3kqgabln.css';
import '../../css/t/tujegccpp.css';
import '../../css/s/srbw3txpj.css';
import '../../css/w/wu6ohmbzf.css';
import '../../css/o/oawqiob8b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3kqgabln"/><path clip-rule="evenodd" class="tujegccpp"/><path clip-rule="evenodd" class="srbw3txpj"/><path clip-rule="evenodd" class="wu6ohmbzf"/><path clip-rule="evenodd" class="oawqiob8b"/>`,
		"fallback": "fad:logo-au",
	});
}

export default Component;
