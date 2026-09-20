import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bf-f_-b3a.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4jsuonxq.css';
import '../../css/y/yrsmebbsu.css';
import '../../css/w/wdfyv4b9k.css';
import '../../css/y/y-9jjbcku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGLd84LdPD" class="n1mjunbsu"><path class="bf-f_-b3a"/></mask><g class="ft5dv1b6b"><circle class="i4jsuonxq"/><path class="yrsmebbsu"/><path class="wdfyv4b9k"/><path mask="url(#SVGLd84LdPD)" class="y-9jjbcku"/></g>`,
		"fallback": "quill:lock-window",
	});
}

export default Component;
