import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/om85ohb3a.css';
import '../../css/t/t-9ql_bfd.css';
import '../../css/z/zt9nl6b7u.css';
import '../../css/b/bfkrlh4rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="om85ohb3a"/><path class="t-9ql_bfd"/><path class="zt9nl6b7u"/><path class="bfkrlh4rj"/></g>`,
		"fallback": "streamline-cyber:picture-2",
	});
}

export default Component;
