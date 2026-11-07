import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7lpq_wf.css';
import '../../css/d/dtrmrxbrl.css';
import '../../css/a/a8727-o4f.css';
import '../../css/g/g522wqbzx.css';
import '../../css/h/ht0i29baz.css';
import '../../css/o/or2soabbr.css';
import '../../css/l/l19bg1wmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb7lpq_wf"/><path class="dtrmrxbrl"/><path class="a8727-o4f"/><path class="g522wqbzx"/><path class="ht0i29baz"/><path class="or2soabbr"/><path class="l19bg1wmt"/>`,
		"fallback": "solar:skateboarding-bold",
	});
}

export default Component;
