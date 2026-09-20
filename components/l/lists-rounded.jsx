import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mcogo4bcn {
  fill: currentColor;
  d: path("M8.885 19q-.44 0-.74-.299t-.299-.74t.3-.739t.739-.299h11.077q.44 0 .739.299q.299.3.299.74t-.299.739t-.74.299zm0-5.962q-.44 0-.74-.299T7.846 12t.3-.74t.739-.298h11.077q.44 0 .739.299T21 12t-.299.74t-.74.298zm0-5.961q-.44 0-.74-.299q-.299-.3-.299-.74t.3-.739T8.884 5h11.077q.44 0 .739.299t.299.74t-.299.739t-.74.299zm-5.586-.299Q3 6.478 3 6.038t.299-.739t.74-.299q.44 0 .739.299t.299.74t-.299.739q-.3.299-.74.299T3.3 6.778m.74 6.26q-.441 0-.74-.298T3 12t.299-.74t.74-.298t.739.299t.299.739t-.299.74q-.3.298-.74.298m0 5.962q-.44 0-.739-.299T3 17.961t.299-.739t.74-.299t.739.299q.299.3.299.74t-.299.739t-.74.299");
}
</style><path class="mcogo4bcn"/>`,
		"fallback": "material-symbols-light:lists-rounded",
	});
}

export default Component;
